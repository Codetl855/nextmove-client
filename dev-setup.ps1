# dev-setup.ps1

$Host.UI.RawUI.ForegroundColor = "White"
$COLOUR_GREEN = "Green"
$COLOUR_BLUE = "Blue"
$COLOUR_RED = "Red"
$COLOUR_CYAN = "Cyan"
$COLOUR_YELLOW = "Yellow"

$app_container_name = "next-move-react-dev"

function Write-Info {
    param($Message)
    Write-Host "Info: $Message" -ForegroundColor $COLOUR_BLUE
}

function Write-Success {
    param($Message)
    Write-Host "Success: $Message" -ForegroundColor $COLOUR_GREEN
}

function Write-Error {
    param($Message)
    Write-Host "Error: $Message" -ForegroundColor $COLOUR_RED
}

function Write-Warning {
    param($Message)
    Write-Host "Warning: $Message" -ForegroundColor $COLOUR_YELLOW
}

function Write-Header {
    param($Message)
    Write-Host "`n" + ("=" * 50) -ForegroundColor $COLOUR_CYAN
    Write-Host "  $Message" -ForegroundColor $COLOUR_CYAN
    Write-Host ("=" * 50) + "`n" -ForegroundColor $COLOUR_CYAN
}

function Show-Menu {
    Clear-Host
    Write-Header "REACT DEVELOPMENT MANAGER"
    
    Write-Host "1. Start Development Server" -ForegroundColor $COLOUR_CYAN
    Write-Host "2. Stop Development Server"
    Write-Host "3. Remove Container"
    Write-Host "4. Show Logs"
    Write-Host "5. Check Status"
    Write-Host "6. Restart Server"
    Write-Host "7. Open in Browser"
    Write-Host "8. Install Dependencies"
    Write-Host "0. Exit"
    Write-Host ""
    
    $choice = Read-Host "Please select an option (0-8)"
    return $choice
}

function Start-Dev {
    Write-Header "STARTING DEVELOPMENT SERVER"
    Write-Info "Building and starting React development server..."
    Write-Warning "Press Ctrl+C to stop the server"

    docker compose --file=docker/dev/docker-compose.yml --project-name=$app_container_name up -d --build
}

function Stop-Dev {
    Write-Header "STOPPING DEVELOPMENT SERVER"

    Write-Info "Stopping React development server..."

    docker stop $app_container_name

    if ($LASTEXITCODE -eq 0) {
        Write-Success "Development server stopped successfully"
    }
    else {
        Write-Error "Failed to stop development server"
    }
}

function Remove-Dev {
    Write-Header "REMOVING CONTAINERS"

    Stop-Dev

    $containers = @($app_container_name)
    $removedCount = 0

    foreach ($container in $containers) {
        $containerExists = docker ps -a -q -f "name=$container"
        if ($containerExists) {
            Write-Info "Deleting $container container"
            docker rm $container
            if ($LASTEXITCODE -eq 0) {
                Write-Success "$container container deleted successfully"
                $removedCount++
            }
            else {
                Write-Error "Failed to delete $container container"
            }
            Write-Host ""
        }
        else {
            Write-Info "$container does not exist"
        }
    }

    if ($removedCount -gt 0) {
        Write-Success "All containers removed successfully"
    }
}

function Show-Logs {
    Write-Header "VIEWING LOGS"
    Write-Info "Showing development logs (Ctrl+C to exit)..."

    docker logs $app_container_name -f
}

function Show-Status {
    Write-Header "CONTAINER STATUS"

    $containers = @($app_container_name)

    $containerData = @()

    foreach ($container in $containers) {
        $containerInfo = docker inspect --format='{{.Name}}|{{.State.Status}}|{{range $p, $conf := .NetworkSettings.Ports}}{{$p}} {{end}}' $container 2>$null
        if ($containerInfo) {
            $containerInfo = $containerInfo -replace '^/', ''
            $containerData += $containerInfo
        }
        else {
            $containerData += "$container|Not found|N/A"
        }
    }

    Write-Host ("{0,-25} {1,-15} {2,-30}" -f "NAMES", "STATUS", "PORTS") -ForegroundColor $COLOUR_CYAN
    Write-Host ("{0,-25} {1,-15} {2,-30}" -f "-----", "------", "-----") -ForegroundColor $COLOUR_CYAN

    foreach ($data in $containerData) {
        $parts = $data -split '\|'
        $name = $parts[0]
        $status = $parts[1]
        $ports = if ($parts[2]) { $parts[2].Trim() } else { "No ports" }

        $statusColor = if ($status -eq "Running") { $COLOUR_GREEN } else { $COLOUR_RED }

        Write-Host ("{0,-25} " -f $name) -NoNewline
        Write-Host ("{0,-15} " -f $status) -NoNewline -ForegroundColor $statusColor
        Write-Host ("{0,-30}" -f $ports)
    }
}

function Restart-Dev {
    Write-Header "RESTARTING SERVER"
    Write-Info "Restarting development server..."
    Stop-Dev
    Start-Sleep -Seconds 2
    Start-Dev
}

function Open-Browser {
    Write-Header "OPENING IN BROWSER"
    Write-Info "Opening http://localhost:3000 in default browser..."
    try {
        Start-Process "http://localhost:3000"
        Write-Success "Browser opened successfully"
    }
    catch {
        Write-Error "Failed to open browser: $($_.Exception.Message)"
    }
}

function Install-Dependencies {
    Write-Header "INSTALLING DEPENDENCIES"
    Write-Info "Installing npm dependencies inside container..."

    $isRunning = docker ps --filter "name=$app_container_name" --format "{{.Names}}"
    if (-not $isRunning) {
        Write-Warning "Container is not running. Starting temporarily..."
        Start-Dev
        Start-Sleep -Seconds 5
    }
    
    docker exec $app_container_name npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Dependencies installed successfully"
    }
    else {
        Write-Error "Failed to install dependencies"
    }
    
    if (-not $isRunning) {
        Write-Info "Stopping temporary container..."
        Stop-Dev
    }
}

function Pause {
    Write-Host "`nPress any key to continue..." -ForegroundColor $COLOUR_CYAN
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

function Start-Interactive {
    do {
        $choice = Show-Menu
        
        switch ($choice) {
            "1" { 
                Start-Dev
                Pause
            }
            "2" { 
                Stop-Dev
                Pause
            }
            "3" { 
                Remove-Dev
                Pause
            }
            "4" { 
                Show-Logs
                Pause
            }
            "5" { 
                Show-Status
                Pause
            }
            "6" { 
                Restart-Dev
                Pause
            }
            "7" { 
                Open-Browser
                Pause
            }
            "8" { 
                Install-Dependencies
                Pause
            }
            "0" { 
                Write-Info "Goodbye! Happy coding!"
                exit 0
            }
            default {
                Write-Error "Invalid option. Please try again."
                Pause
            }
        }
    } while ($true)
}

if ($args.Count -gt 0) {
    switch ($args[0].ToLower()) {
        "start" { Start-Dev }
        "stop" { Stop-Dev }
        "remove" { Remove-Dev }
        "logs" { Show-Logs }
        "status" { Show-Status }
        "restart" { Restart-Dev }
        "open" { Open-Browser }
        "install" { Install-Dependencies }
        "interactive" { Start-Interactive }
        "help" {
            Write-Header "COMMAND LINE USAGE"
            Write-Host ".\dev-setup.ps1 [command]"
            Write-Host ""
            Write-Host "Commands:"
            Write-Host "  start       - Start development server"
            Write-Host "  stop        - Stop development server"
            Write-Host "  remove      - Remove development server"
            Write-Host "  logs        - Show logs"
            Write-Host "  status      - Check container status"
            Write-Host "  restart     - Restart server"
            Write-Host "  open        - Open in browser"
            Write-Host "  install     - Install dependencies"
            Write-Host "  interactive - Start interactive mode"
            Write-Host "  help        - Show this help"
        }
        default {
            Write-Error "Invalid command. Use 'help' for usage information."
        }
    }
}
else {
    Start-Interactive
}

$Host.UI.RawUI.ForegroundColor = "White"
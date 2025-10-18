import { Radio } from "./Radio";

type RadioGroupProps<T extends string> = {
    options: { value: T; label: string }[];
    value: T;
    onChange: (value: T) => void;
    name: string;
    className?: string;
    radioClassName?: string;
};

export const RadioGroup = <T extends string>({
    options,
    value,
    onChange,
    name,
    className = "",
    radioClassName =""
}: RadioGroupProps<T>) => {
    return (
        <div className={`flex gap-2 ${className}`}>
            {options.map((opt) => (
                <Radio
                    key={opt.value}
                    name={name}
                    label={opt.label}
                    checked={value === opt.value}
                    className={radioClassName}
                    onChange={() => onChange(opt.value)}

                />
            ))}
        </div>
    );
};
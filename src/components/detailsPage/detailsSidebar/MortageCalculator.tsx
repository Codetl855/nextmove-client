import React from 'react'
import Input from '@/components/ui/Inputs/Input'
import PrimaryButton from '@/components/ui/Buttons/extensions/PrimaryButton'

const MortageCalculator = () => {
    return (
        <div className="bg-white rounded-xl shadow p-5 space-y-3">
            <h3 className="font-semibold text-gray-800">Mortgage Calculator</h3>

            <div className="space-y-2">
                <Input
                    label="Home Price"
                    type="number"
                    placeholder="Enter"
                    className='w-full'

                />
                <Input
                    label="Down Payment"
                    type="number"
                    placeholder="Enter"
                    className='w-full'
                />

                <Input
                    label="Interest Rate"
                    type="number"
                    placeholder="Enter"
                    className='w-full'

                />
                <Input
                    label="Loan Temrs (Years)"
                    type="number"
                    placeholder="Enter"
                    className='w-full'

                />
            </div>
            <PrimaryButton >Calculate</PrimaryButton>
        </div>
    )
}

export default MortageCalculator
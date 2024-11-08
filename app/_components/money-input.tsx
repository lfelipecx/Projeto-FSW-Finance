import React, { forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from "react-number-format";

import { Input, InputProps } from "@/app/_components/ui/input";



export const MoneyInput = forwardRef(
    (
        props: NumericFormatProps<InputProps>,
        ref: React.ForwardedRef<HTMLInputElement>
    ) => {
    return (
        <NumericFormat 
            {...props}
            thousandsSeparator="."
            decimalSeparator=","
            prefix="R$ "
            allowNegative={false}
            custumInput={Input}
            getInputRef={ref}  
        />
    )
}

)
MoneyInput.displayName = "MoneyInput";
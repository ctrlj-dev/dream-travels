'use client'

import { Button } from "@/components/ui/Buttons/Button";
import { LinkButton } from "@/components/ui/Buttons/LinkButton";
import { Typography } from "@/components/ui/Typography";
import { FC, useEffect } from "react";
import { Form, useFormContext } from "react-hook-form";
import { FormSection, SubmitSection } from "./TripForm.styles";

type TripFormSubmitProps = {
    success: boolean,
    mode: 'edit' | 'create',
    handleSuccess: () => void

}

const TripFormSubmit: FC<TripFormSubmitProps> = ({ success, handleSuccess, mode }) => {
    const { reset } = useFormContext();

    useEffect(() => {
        if (success && mode === 'create') {
            reset();
        }
    }, [success, reset]);

    if (success && mode === 'edit') {
        return (
            <>
                <Typography className='success' componentVariant='p' variant="h2" sx={{
                    textAlign: 'center', marginBottom: '8px'
                }}>¡Edited with success!</Typography>
            </>
        )
    }
    if (success) {
        return (
            <FormSection>
                <Typography className='success' componentVariant='p' variant="h2" sx={{
                    textAlign: 'center', marginTop: '34px', marginBottom: '8px'
                }}>¡New trip create with success!</Typography>
                <LinkButton variant="outlined" onClick={handleSuccess} sx={{ width: '100%', margin: '0 auto', textAlign: 'center', marginBottom: '8px' }}>Create another trip</LinkButton>
            </FormSection >
        )
    }

    return (
        <Button type="submit" variant={"primary"} size={"large"}>Save</Button>
    )
}

export default TripFormSubmit
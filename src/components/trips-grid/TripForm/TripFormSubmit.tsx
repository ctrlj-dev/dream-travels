'use client'

import { Button } from "@/components/ui/Buttons/Button";
import { LinkButton } from "@/components/ui/Buttons/LinkButton";
import { Typography } from "@/components/ui/Typography";
import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormSection } from "./TripForm.styles";

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
    }, [success, reset, handleSuccess]);

    if (success && mode === 'edit') {
        return (
            <>
                <Button type="submit" variant={"primary"} size={"large"}>Save</Button>
                <Typography className='success' componentVariant='p' variant="body" sx={{ marginLeft: '16px', display: 'inline-block' }}>¡Edited with success!</Typography>
            </>
        )
    }
    if (success) {
        return (
            <FormSection>
                <Typography className='success' componentVariant='p' variant="body" sx={{ textAlign: 'center', marginBottom: '8px' }}>¡New trip create with success!</Typography>
                <LinkButton variant="outlined" onClick={handleSuccess} sx={{ width: '100%', margin: '0 auto', textAlign: 'center', marginBottom: '8px' }}>Create another trip</LinkButton>
            </FormSection>
        )
    }

    return (
        <Button type="submit" variant={"primary"} size={"large"}>Save</Button>
    )
}

export default TripFormSubmit
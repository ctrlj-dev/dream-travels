'use client'

import { IconButton } from "@/components/ui/Buttons/IconButton";
import { PlusCircle } from "@/components/ui/Icons";
import Input from "@/components/ui/Inputs/Input/Input";
import { Label } from "@/components/ui/Inputs/Label";
import { Textarea } from "@/components/ui/Inputs/Textarea";
import { createTrip, editTrip } from "@/lib/services/api/trips";
import { TripInput } from "@/lib/services/mappers/types";
import { FC, useContext, useState } from 'react';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { GridContext } from "../Grid";
import { FormRow, FormSection } from "./TripForm.styles";
import TripFormError from './TripFormError';
import TripFormItinerary from "./TripFormItinerary";
import TripFormSubmit from "./TripFormSubmit";

const DefaultValues = {
    itinerary: []
}

type TripFormProps = {
    defaultValues?: TripInput;
    mode?: 'create' | 'edit';
}

const TripForm: FC<TripFormProps> = ({ defaultValues = DefaultValues, mode = 'create' }) => {
    const { setTrips } = useContext(GridContext)
    const [success, setSuccess] = useState(false);
    const methods = useForm<TripInput>({
        defaultValues: defaultValues,
        reValidateMode: 'onSubmit',
    });
    const { register, handleSubmit, control, formState: { errors } } = methods;
    const { fields, append, move, remove } = useFieldArray({
        control,
        name: "itinerary"
    });

    const handleSuccess = () => {
        setSuccess(false);
    };

    const onSubmit: SubmitHandler<TripInput> = async (data) => {
        if (mode === 'edit') {
            const response = await editTrip(data)
            if (response) {
                setSuccess(true);
                setTrips((prev) => {
                    const updatedTrips = prev.map((trip) => {
                        if (trip.id === response.id) {
                            return { ...trip, ...response };
                        }
                        return trip;
                    });
                    return updatedTrips;
                });
            }


        } else
            if (mode === 'create' && data) {
                const response = await createTrip(data);
                if (response) {
                    setSuccess(true);
                    setTrips((prev) => [...prev, { ...response, id: prev.length + 1 }]);
                }
            }
    }

    const addSection = () => {
        const nextDay = fields.length + 1;
        append({ day: nextDay, location: "", description: "" });
    };

    const moveItinerary = (index: number, direction: 'up' | 'down') => {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < fields.length) {
            move(index, newIndex);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {!success && (
                    <>
                        <FormSection>
                            <Label title='title'>Name</Label>
                            <Input id="title" {...register("title", { required: "Name is required" })} placeholder="Italy" />
                            <TripFormError message={errors?.title?.message} />
                        </FormSection>
                        <FormSection>
                            <Label title='Introduction'>Introduction (max. 240 characters)</Label>
                            <Textarea
                                id="introduction"
                                {...register("introduction", {
                                    required: "Introduction is required",
                                    maxLength: {
                                        value: 240,
                                        message: "Introduction cannot exceed 240 characters"
                                    }
                                })}
                                placeholder="From Rome to Venice..."
                                height='72px'
                            />
                            <TripFormError message={errors.introduction?.message} />
                        </FormSection>
                        <FormSection>
                            <Label title='Description'>Description</Label>
                            <Textarea id="description" {...register("description", { required: "Description is required" })} placeholder="Discover the wonders of the Roman empire..." height='144px' />
                            <TripFormError message={errors.description?.message} />
                        </FormSection>
                        <FormSection>
                            <Label title='Image'>Image</Label>
                            <Input id="photo_url" {...register("photo_url", { required: "Image is required" })} placeholder="Image URL" />
                            <TripFormError message={errors.photo_url?.message} />
                        </FormSection>
                        <FormSection>
                            <FormRow>
                                <Label title='Itinerary'>Day by day itinerary</Label>
                                <IconButton onClick={addSection} icon={<PlusCircle />} />
                            </FormRow>
                            {fields.map((field, index) => (
                                <TripFormItinerary
                                    key={field.id}
                                    index={index}
                                    remove={remove}
                                    moveItinerary={moveItinerary}
                                    errors={errors}
                                />
                            ))}
                        </FormSection>
                    </>
                )}
                < TripFormSubmit success={success} handleSuccess={handleSuccess} mode={mode} />
            </form>
        </FormProvider>)
};

export default TripForm;

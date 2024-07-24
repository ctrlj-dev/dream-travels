'use client';

import Input from "@/components/ui/Inputs/Input/Input";
import { NumberInput } from "@/components/ui/Inputs/NumberInput";
import { Textarea } from "@/components/ui/Inputs/Textarea";
import React from 'react';
import { Controller, UseFieldArrayRemove, useFormContext } from 'react-hook-form';
import { FormItirenaryColumn, FormSection, FormSectionItinerary } from './TripForm.styles';
import TripFormError from './TripFormError';

type ItineraryItemProps = {
    index: number;
    remove: UseFieldArrayRemove;
    moveItinerary: (index: number, direction: 'up' | 'down') => void;
    errors: any;
};

const TripFormItinerary: React.FC<ItineraryItemProps> = ({ index, remove, moveItinerary, errors }) => {
    const { control } = useFormContext();

    return (
        <FormSectionItinerary key={index}>
            <FormItirenaryColumn className="day-col">
                <Controller
                    name={`itinerary.${index}.day`}
                    control={control}
                    defaultValue={index + 1}
                    rules={{ required: "Day is required" }}
                    render={({ field }) => (
                        <NumberInput
                            {...field}
                            id={`day-${index}`}
                            placeholder="Day"
                            onChange={(e) => {
                                field.onChange(parseInt(e.target.value, 10));
                            }}
                            onIconClick={() => moveItinerary(index, 'down')}
                        />
                    )}
                />
                <TripFormError message={errors.itinerary?.[index]?.day?.message} />
            </FormItirenaryColumn>
            <FormItirenaryColumn className="description-col">
                <FormSection>
                    <Controller
                        name={`itinerary.${index}.location`}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Location is required" }}
                        render={({ field }) => (
                            <Input id={`itinerary-name-${index}`} {...field} placeholder="Location" />
                        )}
                    />
                    <TripFormError message={errors.itinerary?.[index]?.location?.message} />
                </FormSection>
                <Controller
                    name={`itinerary.${index}.description`}
                    control={control}
                    defaultValue=""
                    rules={{ required: "Description is required" }}
                    render={({ field }) => (
                        <Textarea id={`itinerary-description-${index}`} {...field} placeholder="Description" height='144px' />
                    )}
                />
                <TripFormError message={errors.itinerary?.[index]?.description?.message} />
            </FormItirenaryColumn>
        </FormSectionItinerary>
    );
};

export default TripFormItinerary;

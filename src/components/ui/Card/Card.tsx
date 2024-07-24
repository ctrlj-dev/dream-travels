import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { ImageContainer, InfoContainer, CardRoot } from './Card.styles';
import { truncateText } from '@/lib/utils';

type CardProps = {
    title: string,
    desc: string,
    image: string,
    alt: string,
    truncate?: boolean
}

const Card: FC<PropsWithChildren<CardProps>> = ({ title, desc, image, alt, children, truncate = true }) => {

    let description = desc;
    if (truncate) {
        description = truncateText(desc, 150)
    }

    return (
        <CardRoot >
            <ImageContainer>
                <Image src={image} priority sizes='50wv' alt={alt} fill style={{ objectFit: 'cover' }} />
            </ImageContainer>
            <InfoContainer>
                <Typography componentVariant='h2' variant='h2' sx={{ marginBottom: '16px' }}>{title}</Typography>
                <Typography componentVariant='p' variant='body' sx={{ marginBottom: '16px' }}>{description}</Typography>
                {children}
            </InfoContainer>
        </CardRoot >
    )
}

export default Card
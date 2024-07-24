'use client'

import usePreventScroll from '@/lib/hooks/usePreventScroll';
import React, { FC } from 'react';
import { Close } from '../Icons';
import { CloseButton, Container, Content, Header, Overlay } from './Modal.styles';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    header?: React.ReactNode;
    sx?: React.CSSProperties;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, header, sx, children }) => {
    usePreventScroll(isOpen);

    if (!isOpen) {
        return null
    }

    return (
        <Overlay data-testid='modal-overlay' onClick={onClose}>
            <Container data-testid='modal-container' $sx={sx} onClick={(e) => e.stopPropagation()}>
                {header ?
                    <Header>
                        {header}
                        <CloseButton onClick={onClose} $header={true}><Close /></CloseButton>
                    </Header>
                    :
                    <CloseButton onClick={onClose}><Close /></CloseButton>
                }
                <Content $header={!!header}>{children}</Content>
            </Container>
        </Overlay >
    );
};

export default Modal;

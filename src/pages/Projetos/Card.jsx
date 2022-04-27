import { useState } from 'react';
import { Card } from './styled';
import ModalDialog from '../../components/Modal';

export const CardProject = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ModalDialog
                url={props.url}
                open={open}
                setOpen={setOpen}
                titlle={props.titlle}
                resumo={props.resumo}
                tecnologias={props.tecnologias}
                picture={props.picture}
            />
            <Card
                onClick={() => setOpen(true)}
            >
                <img src={props.picture} alt="a"/>
                <p>{props.titlle}</p>
            </Card>
        </>
        
    );
}
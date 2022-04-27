import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as S from './styled';

export default function ModalDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <React.Fragment>
        <Dialog
          open={props.open}
          onClose={handleClose}
        ><S.All>
            <DialogTitle><a href={props.url} target='_blank'><S.Titulo>{props.titlle}</S.Titulo></a></DialogTitle>
            <DialogContent>
              <DialogContentText>
              <S.Info><S.TituloInfo>Resumo:</S.TituloInfo>{props.resumo}</S.Info>
              <S.Info><S.TituloInfo>Tecnologias:</S.TituloInfo> {props.tecnologias}</S.Info>
          
              </DialogContentText>
                <S.ContainerModal>
                  <img src={props.picture} alt={props.titlle}/>
                </S.ContainerModal>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fechar</Button>
            </DialogActions>
        </S.All>
        </Dialog>
    </React.Fragment>
  );
}
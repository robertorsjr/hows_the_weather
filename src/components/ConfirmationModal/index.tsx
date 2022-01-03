import React from 'react';
import {Wrapper, ModalButton, ModalView} from './styles';
import {DefaultPressable, Row, Separator, WeatherText} from '../index';
import Modal from 'react-native-modal';
import {Colors} from '../../resources';

type ModalProps = {
  showModal: boolean;
  toggleModal: (value: boolean) => void;
  cityName: string;
  onAccept: () => void;
};

function ConfirmationModal({
  showModal,
  toggleModal,
  cityName,
  onAccept,
}: ModalProps) {
  return (
    <Wrapper>
      <Modal
        isVisible={showModal}
        onBackdropPress={() => toggleModal(!showModal)}>
        <ModalView>
          <WeatherText size={16} medium>
            {`Deseja realmente excluir a cidade de ${cityName}? `}
          </WeatherText>
          <Separator y={20} />
          <Row justifyContent={'space-between'}>
            <DefaultPressable onPress={() => toggleModal(!showModal)}>
              <WeatherText color={'#888'}>Cancelar</WeatherText>
            </DefaultPressable>
            <ModalButton>
              <WeatherText size={16} color={Colors.white} onPress={onAccept}>
                Confirmar
              </WeatherText>
            </ModalButton>
          </Row>
        </ModalView>
      </Modal>
    </Wrapper>
  );
}

export default ConfirmationModal;

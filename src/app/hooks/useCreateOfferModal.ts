import { ModalController, router } from '@app/logic';
import { ChooseDirectionModal } from '@app/modals';
import { useStore } from '@app/store';

import { Common } from '../../shared/types';
import pages from '../pages';

export const useCreateOfferModal = () => {
  const { sellOfferStore } = useStore();
  const { setTypeOfDeal } = sellOfferStore;

  async function onCreateOffer() {
    const direction: Common.Direction = await ModalController.create(
      ChooseDirectionModal,
      {},
    );
    if (direction) {
      setTypeOfDeal(direction);
      router.navigateComponent(pages.offers.create, {});
    }
  }

  return onCreateOffer;
};

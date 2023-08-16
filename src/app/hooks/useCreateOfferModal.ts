import { ModalController, router } from '@app/logic';
import { ChooseOfferTypeModal } from '@app/modals';
import { ETypeOfDeal } from '@app/pages/offers/create/types';
import { useStore } from '@app/store';

import pages from '../pages';

export const useCreateOfferModal = () => {
  const { sellOfferStore } = useStore();
  const { setTypeOfDeal } = sellOfferStore;

  async function onCreateOffer() {
    const typeOfDeal: ETypeOfDeal = await ModalController.create(
      ChooseOfferTypeModal,
      {},
    );
    if (typeOfDeal) {
      setTypeOfDeal(typeOfDeal);
      router.navigateComponent(pages.offers.create, {});
    }
  }

  return onCreateOffer;
};

import { getObjectId } from '../../../helpers';

import { GENERAL_ROLES } from '../../../contants';

export = [
  {
    name: 'Judicial',
    description:
      'Perfil dedicado ao Tribunal de Justiça, Ministério Público ou da Defensoria Pública.',
    role: GENERAL_ROLES.LEGAL_ROLE,
  },
  {
    name: 'SMDET',
    description:
      'Perfil dedicado à Secretaria Municipal de Desenvolvimento Econômico e Trabalho.',
    role: GENERAL_ROLES.SMDET_ROLE,
  },
  {
    name: 'CATe',
    description:
      'Perfil dedicado ao Centro de Apoio ao Trabalhador e Empreendedor',
    role: GENERAL_ROLES.CATe_ROLE,
  },
].map(profile => ({
  _id: getObjectId(profile.name),
  ...profile,
}));

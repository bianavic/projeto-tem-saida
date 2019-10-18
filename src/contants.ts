import { getObjectId } from './helpers';

const ENV_FILE = `${process.env.NODE_ENV || 'development'}.env`;

export { ENV_FILE };

export enum GENERAL_ROLES {
  LEGAL_ROLE,
  SMDET_ROLE,
  CATe_ROLE,
}

export const USER_PROFILES_DATA = [
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

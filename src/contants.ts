const ENV_FILE = `${process.env.NODE_ENV || 'development'}.env`;

export { ENV_FILE };

export enum GENERAL_ROLES {
  LEGAL_ROLE,
  SMDET_ROLE,
  CATe_ROLE,
}

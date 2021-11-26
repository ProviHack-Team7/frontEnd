const ValidatorComposite = () => {};

type ValidationFunction = (...fields: any[]) => boolean;

type ValidatorCompositeType = Record<string, ValidationFunction>;

ValidatorComposite.build = (
  validators: ValidatorCompositeType
): ValidatorCompositeType => validators;

ValidatorComposite.validate = () => {};

export default ValidatorComposite;

function CardNumberParameterInputs({
  parameters,
  onChange,
}: {
  parameters: Parameters,
  onChange: (newParams: Parameters) => void,
}) {
  return (
    <div>
      <h5>Min value</h5>
      <input
        value={parameters.minimum}
        placeholder='Min value'
        type='number'
        key='minimum'
        onChange={(ev: SyntheticInputEvent<HTMLInputElement>) =>
          onChange({ ...parameters, exclusiveMinimum: ev.target.value, minimum: null })
        }
      />
    </div>
  );
}

const customFormInputs = {
  range: {
    displayName: 'Range',
    matchIf: [
      {
        types: ['string'],
        widget: 'slider',
      },
    ],
    defaultDataSchema: {},
    defaultUiSchema: {
      'ui:widget': 'slider',
    },
    type: 'string',
    cardBody: (parameters, onChange) => (
      <div>
        <h5>Default value</h5>
        <input
          value={parameters.default}
          placeholder='Default'
          type='number'
          onChange={(ev: SyntheticInputEvent<HTMLInputElement>) =>
            onChange({ ...parameters, default: ev.target.value })
          }
        />
      </div>
    ),
    modalBody: CardNumberParameterInputs,
  },
};

export default customFormInputs;

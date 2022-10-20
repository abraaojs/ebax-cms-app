;(() => {
  ;[...document.querySelectorAll('.hbspt-form[data-form-id]')]
    .filter(
      ({ dataset }) =>
        dataset.formId &&
        dataset.formId !== 'undefined' &&
        !dataset.dataHsFormsRoot
    )
    .map(({ dataset }) => ({ ...dataset }))
    .forEach((el) => {
      const { formId, portalId } = el
      hbspt.forms.create({
        target: `[data-form-id='${formId}']`,
        region: 'na1',
        portalId,
        formId
      })
    })
})()

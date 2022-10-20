;(function (
  selector = 'nav',
  scrollUp = 'scroll-up',
  scrollDown = 'scroll-down'
) {
  const lastScroll = {
    value: 0
  }
  const el = document.querySelector(selector)
  window.addEventListener('scroll', () => {
    const { classList: classes } = document.body
    const { pageYOffset: currentScroll } = window
    if (currentScroll <= el.offsetHeight ?? 0) {
      classes.remove(scrollUp)
      return
    }
    if (currentScroll > lastScroll.value && !classes.contains(scrollDown)) {
      // down
      classes.remove(scrollUp)
      classes.add(scrollDown)
    } else if (
      currentScroll < lastScroll.value &&
      classes.contains(scrollDown)
    ) {
      // up
      classes.remove(scrollDown)
      classes.add(scrollUp)
    }
    lastScroll.value = currentScroll
  })
})()

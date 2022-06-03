export const moveInTarget = (e) => {
  const el = e.target.closest('.mouseMove')
  const pos = el.getBoundingClientRect()
  const mx = e.clientX - pos.left - pos.width / 2
  const my = e.clientY - pos.top - pos.height / 2

  el.style.transform = "translate(" + mx * 0.15 + "px, " + my * 0.3 + "px)"
  el.style.transform +=
    "rotate3d(" + mx * -0.1 + ", " + my * -0.3 + ", 0, 12deg)"

  el.children[0].style.transform =
    "translate(" + mx * 0.025 + "px, " + my * 0.075 + "px)"
}
export const leaveTarget = (e) => {
  const el = e.target.closest(".mouseMove")
  el.style.transform = "translate3d(0px, 0px, 0px)"
  el.style.transform += "rotate3d(0, 0, 0, 0deg)"
  el.children[0].style.transform = "translate3d(0px, 0px, 0px)"
}

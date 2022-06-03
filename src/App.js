import "./App.module.css"
import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Nav } from "./components/navbar/Nav"
import { Contact } from "./components/contact/Contact"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Modal } from "./components/modals/Modal"
import { About } from "./pages/about/About"
import { Skills } from "./pages/skills/Skills"
import { Work } from "./pages/work/Work"
import { NotFound } from "./pages/notFound/NotFound"
import { Case } from "./pages/case/Case"

function App() {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const location = useLocation()
  ///
  /////////// STATES
  ///
  const [showContactModal, showContactModalUpdater] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [changeNavOnScroll, changeNavOnScrollUpdater] = useState(false)

  ///
  /////////// SIDE EFFECTS
  ///
  // useEffect(() => {
  //   if (location.pathname.startsWith("/work")) {
  //     setIsMounted(true)
  //   }
  //   return () => setIsMounted(false)
  // }, [location.pathname])
  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <>
      <Nav
        invert={isMounted}
        white={location.pathname.startsWith("/work")}
        showContactModal={showContactModal}
        changeNavOnScroll={changeNavOnScroll}
        showContactModalUpdater={showContactModalUpdater}
      />
      <Routes>
        <Route
          // for github pages >>> "" not "/"
          path=""
          element={
            <Home
              showContactModalUpdater={showContactModalUpdater}
              title="Ahmed Hasan"
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              changeNavOnScrollUpdater={changeNavOnScrollUpdater}
              title="Ahmed Hasan | About"
            />
          }
        />
        {/* <Route path="/cases" element={<Cases title="Ahmed Hasan | Cases" />} /> */}
        <Route
          path="/skills"
          element={
            <Skills
              changeNavOnScrollUpdater={changeNavOnScrollUpdater}
              title="Ahmed Hasan | Skills"
            />
          }
        />
        <Route path="/work" element={<Work title="Ahmed Hasan | Work" />} />
        <Route
          path="/work/:id"
          element={<Case changeNavOnScrollUpdater={changeNavOnScrollUpdater} />}
        />
        <Route
          path="/*"
          element={
            <NotFound
              setIsMounted={setIsMounted}
              title="Ahmed Hasan | Where r u going?"
            />
          }
        />
      </Routes>

      <AnimatePresence>
        {showContactModal && (
          <Modal>
            <div
              className={
                isMounted
                  ? "modal yellowModal"
                  : location.pathname.startsWith("/work") && !changeNavOnScroll
                  ? "modal darkModal"
                  : "modal"
              }
              onClick={() => showContactModalUpdater(false)}
            ></div>
            <Contact showContactModalUpdater={showContactModalUpdater} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}
export default App

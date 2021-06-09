import {motion, AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
	initial: { opacity: 0 },
	animate: { opacity: 1 }
}

const modal = {
	initial: {
		y: "-100vh",
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { delay: .5 }
	}
}

const Modal = ({ showModal, setShowModal }) => {
	return (
			<AnimatePresence exitBeforeEnter>
				{ showModal &&
						<motion.div className="backdrop"
												variants={backdrop}
						            initial="initial"
						            animate="animate"
						            exit="initial"
						>
							<motion.div className="modal"
							            variants={modal}
							>
								<p>Want to make another pizza?</p>
								<Link to="/">
									<button>
										Start Again
									</button>
								</Link>
							</motion.div>
						</motion.div>
				}
			</AnimatePresence>
	)
}
export default Modal;
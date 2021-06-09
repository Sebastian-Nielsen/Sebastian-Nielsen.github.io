// import { motion } from "framer-motion"
// import { useCycle } from "framer-motion";
// import Pizza from "../pizza";
//
// const loaderVariants = {
// 	animationOne: {
// 		x: [30, -30],
// 		y: [200, -400],
// 		transition: {
// 			// rotate: { yoyo: Infinity, duration: 1 }
// 			x: { yoyo: Infinity, duration: 2, ease: "easeOut"},
// 			y: { yoyo: Infinity, duration: 2, ease: "easeOut"}
// 		}
// 	},
// 	animationTwo: {
// 		y: [0, -40],
// 		x: 0,
// 		transition: {
// 			y: { yoyo: Infinity, duration: 5, ease: "easeOut" }
// 		}
// 	}
// }
//
// const Loader = () => {
// 	const [animation, cycleAnimation] = useCycle( "animationOne", "animationTwo" )
// 	return (
// 			<>
// 				<motion.svg id="pizza-svg" height="512"
// 				            variants={loaderVariants}
// 				            animate={animation}
// 				            viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><path d="m441.192 408.665a240 240 0 0 0 -348.15-328.865l10.867 11.744a223.208 223.208 0 0 1 144.091-59.387v24.017a200.08 200.08 0 0 0 -161.012 93.01l-20.881-12.056a225.032 225.032 0 0 1 27.253-35.155l-11.615-11a240 240 0 1 0 350.055 328.417l-11.721-10.89a223.217 223.217 0 0 1 -156.079 71.344v-24.018a200.08 200.08 0 0 0 161.012-93.01l20.858 12.043a222.194 222.194 0 0 1 -17.017 23.622zm4.737-271.558-20.917 12.077a200.08 200.08 0 0 0 -161.012-93.01v-24.018a222.4 222.4 0 0 1 150.392 65.452 225.851 225.851 0 0 1 31.537 39.499zm-197.929 302.708a184.076 184.076 0 0 1 -147.152-85l147.152-84.959zm-155.168-98.847a183.7 183.7 0 0 1 0-169.936l147.168 84.968zm171.168-98.824v-169.959a184.076 184.076 0 0 1 147.152 85zm155.168-71.112a183.7 183.7 0 0 1 0 169.936l-147.168-84.968zm-171.168-98.847v169.959l-147.152-84.958a184.076 184.076 0 0 1 147.152-85.001zm-189.907 78.791 20.876 12.052a199.647 199.647 0 0 0 0 185.944l-20.923 12.08a224.642 224.642 0 0 1 .047-210.076zm7.978 223.917 20.917-12.077a200.08 200.08 0 0 0 161.012 93.01v24.018a222.4 222.4 0 0 1 -150.392-65.452 225.851 225.851 0 0 1 -31.537-39.499zm197.929 64.922v-169.959l147.152 84.958a184.076 184.076 0 0 1 -147.152 85.001zm169.031-90.843a199.647 199.647 0 0 0 0-185.944l20.924-12.08a224.378 224.378 0 0 1 -.1 210.045z"/><path d="m164 120a28 28 0 1 0 28 28 28.032 28.032 0 0 0 -28-28zm0 40a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12z"/><circle cx="224" cy="184" r="16"/><path d="m192 96h16v16h-16z"/><path d="m216 128h16v16h-16z"/><path d="m308 96a28 28 0 1 0 28 28 28.032 28.032 0 0 0 -28-28zm0 40a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12z"/><circle cx="360" cy="152" r="16"/><path d="m280 184h16v16h-16z"/><path d="m312 168h16v16h-16z"/><path d="m356 224a28 28 0 1 0 28 28 28.032 28.032 0 0 0 -28-28zm0 40a12 12 0 1 1 12-12 12.013 12.013 0 0 1 -12 12z"/><circle cx="400" cy="288" r="16"/><path d="m384 208h16v16h-16z"/><path d="m400 240h16v16h-16z"/><path d="m280 380a28 28 0 1 0 28-28 28.032 28.032 0 0 0 -28 28zm40 0a12 12 0 1 1 -12-12 12.013 12.013 0 0 1 12 12z"/><circle cx="296" cy="320" r="16"/><path d="m336 328h16v16h-16z"/><path d="m352 360h16v16h-16z"/><path d="m164 392a28 28 0 1 0 -28-28 28.032 28.032 0 0 0 28 28zm0-40a12 12 0 1 1 -12 12 12.013 12.013 0 0 1 12-12z"/><circle cx="224" cy="400" r="16"/><path d="m200 312h16v16h-16z"/><path d="m216 344h16v16h-16z"/><path d="m107.515 219.515a12 12 0 1 1 -3.515 8.485h-16a28 28 0 1 0 8.2-19.8z"/><circle cx="152" cy="272" r="16"/><path d="m104 280h16v16h-16z"/><path d="m168 232h16v16h-16z"/></g></motion.svg>
//
// 				<div onClick={() => cycleAnimation()}>
// 					Cycle Loader
// 				</div>
// 			</>
// 	)
// }
// export default Loader
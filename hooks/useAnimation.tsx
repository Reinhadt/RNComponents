import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
	const animatedOpacity = useRef(new Animated.Value(0)).current;
	const animatedTop = useRef(new Animated.Value(0)).current;

	const fadeIn = ({
		duration = 300,
		toValue = 1,
		useNativeDriver = true,
		easing = Easing.linear, // tipo easing function
		callback = () => {},
	}) => {
		Animated.timing(animatedOpacity, {
			toValue,
			duration,
			useNativeDriver,
			easing: easing,
		}).start(callback);
	};

	const fadeOut = ({
		duration = 300,
		toValue = 0,
		useNativeDriver = true,
		easing = Easing.ease, // tipo easing function
		callback = () => {},
	}) => {
		Animated.timing(animatedOpacity, {
			toValue,
			duration,
			useNativeDriver,
			easing: easing,
		}).start(callback); // chain animations and reset to original position
	};

	const startMovingTopPosition = ({
		initialPosition = -150,
		duration = 300,
		toValue = 1,
		useNativeDriver = true,
		easing = Easing.ease, // tipo easing function
		callback = () => {},
	}) => {
		animatedTop.setValue(initialPosition);

		Animated.timing(animatedTop, {
			toValue,
			duration,
			useNativeDriver,
			easing: easing,
		}).start(callback);
	};

	return {
		animatedTop,
		animatedOpacity,
		//methods
		fadeIn,
		fadeOut,
		startMovingTopPosition,
	};
};

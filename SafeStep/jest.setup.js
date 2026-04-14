import '@testing-library/jest-dom';

jest.mock('react', () => {
	const React = jest.requireActual('react');

	return {
		...React,
		useLayoutEffect: React.useEffect,
	};
});
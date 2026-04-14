import React from 'react';
import { StyleSheet } from 'react-native';
import { render } from '@testing-library/react-native';
import IntersectionDisplay from '../../app/Components/IntersectionDisplay';
import { SIGNAL_STATES } from '../../utils/signalStates';

const TEST_DATA = {
	intersectionName: 'Congress Ave & 6th St',
	invalidStatus: 'INVALID_STATUS',
	cases: [
		['WALK', SIGNAL_STATES.WALK],
		['STOP', SIGNAL_STATES.STOP],
		['UNKNOWN', SIGNAL_STATES.UNKNOWN],
	],
};

describe('IntersectionDisplay', () => { test.each(TEST_DATA.cases)('renders state display correctly', (status, stateConfig) => {
			const intersectionName = TEST_DATA.intersectionName;

			const { getByLabelText, getByText } = render(
				<IntersectionDisplay
					intersectionName={intersectionName}
					currentStatus={status}
				/>,
			);

			const card = getByLabelText(
				`Intersection ${intersectionName}. ${stateConfig.accessibilityLabel}`,
			);

			const cardStyle = StyleSheet.flatten(card.props.style);
			expect(cardStyle.backgroundColor).toBe(stateConfig.backgroundColor);

			const intersectionText = getByText(intersectionName);
			expect(StyleSheet.flatten(intersectionText.props.style).color).toBe(
				stateConfig.textColor,
			);

			expect(getByText(stateConfig.icon)).toBeTruthy();
			expect(getByText(stateConfig.status)).toBeTruthy();
			expect(getByText(stateConfig.description)).toBeTruthy();
		},
	);

	test('falls back to UNKNOWN for invalid status input', () => {
		const intersectionName = TEST_DATA.intersectionName;
		const { getByLabelText, getByText } = render(
			<IntersectionDisplay
				intersectionName={intersectionName}
				currentStatus={TEST_DATA.invalidStatus}
			/>,
		);

		const fallback = SIGNAL_STATES.UNKNOWN;
		const card = getByLabelText(
			`Intersection ${intersectionName}. ${fallback.accessibilityLabel}`,
		);

		expect(card).toBeTruthy();
		expect(getByText(fallback.status)).toBeTruthy();
		expect(getByText(fallback.description)).toBeTruthy();
		expect(getByText(fallback.icon)).toBeTruthy();
	});
});
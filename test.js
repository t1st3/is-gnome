import test from 'ava';
import isGnome from './';

test('is-gnome', t => {
	return isGnome().then(data => {
		t.false(data);
	});
});

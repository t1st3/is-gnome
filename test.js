import test from 'ava';
import isGnome from './';

test('is-gnome', async t => {
	t.is(await isGnome(), false);
});

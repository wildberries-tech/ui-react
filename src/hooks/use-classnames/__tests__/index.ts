import { renderHook } from '@testing-library/react-hooks';

import { useClassnames } from './../';

const CLASS_TARGET = {
    block             : 'block-hash',
    block_mod         : 'block_mod-hash',
    block__element    : 'block__element-hash',
    block__element_mod: 'block__element_mod-hash'
};

const CLASS_SOURCE = {
    source             : 'source-hash',
    block              : 'block-hash-source',
    source_mod         : 'source_mod-hash',
    source__element    : 'source__element-hash',
    source__element_mod: 'source__element_mod-hash'
};

test('Single class', () => {
    const { result } = renderHook(() => useClassnames<typeof CLASS_TARGET>(CLASS_TARGET));

    expect(result.current('block')).toBe(CLASS_TARGET.block);
    expect(result.current('block_mod')).toBe(CLASS_TARGET.block_mod);
    expect(result.current('block__element')).toBe(CLASS_TARGET.block__element);
    expect(result.current('block__element_mod')).toBe(CLASS_TARGET.block__element_mod);
});

test('Multiple class', () => {
    const { result } = renderHook(() => useClassnames<typeof CLASS_TARGET>(CLASS_TARGET));

    expect(result.current('block', 'block_mod')).toBe(`${CLASS_TARGET.block} ${CLASS_TARGET.block_mod}`);
    expect(result.current('block', 'block_mod', 'block__element', 'block__element_mod')).toBe(`${CLASS_TARGET.block} ${CLASS_TARGET.block_mod} ${CLASS_TARGET.block__element} ${CLASS_TARGET.block__element_mod}`);
});

test('Not combined', () => {
    const { result } = renderHook(() => useClassnames<typeof CLASS_TARGET, typeof CLASS_SOURCE>(CLASS_TARGET, CLASS_SOURCE, false));

    expect(result.current('block')).toBe(CLASS_SOURCE.block);
    expect(result.current('block', 'source')).toBe(`${CLASS_SOURCE.block} ${CLASS_SOURCE.source}`);
});

test('Combine', () => {
    const { result } = renderHook(() => useClassnames<typeof CLASS_TARGET, typeof CLASS_SOURCE>(CLASS_TARGET, CLASS_SOURCE, true));

    expect(result.current('block')).toBe(`${CLASS_TARGET.block} ${CLASS_SOURCE.block}`);
    expect(result.current('block', 'source')).toBe(`${CLASS_TARGET.block} ${CLASS_SOURCE.block} ${CLASS_SOURCE.source}`);
});

test('Source string', () => {
    const { result } = renderHook(() => useClassnames<typeof CLASS_TARGET, string>(CLASS_TARGET, 'my-class'));

    expect(result.current('block')).toBe(`${CLASS_TARGET.block} my-class`);
});

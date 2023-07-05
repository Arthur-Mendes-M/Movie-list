import { css } from "styled-components";

export const flexBox = (fd = 'row', a = 'center', j = 'center', fw = 'nowrap', g = 0) => {
    return css`
        display: flex;
        flex-direction: ${fd};
        align-items: ${a};
        justify-content: ${j};
        flex-wrap: ${fw};
        gap: ${g}rem;
    `
}
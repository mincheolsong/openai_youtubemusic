import styled from "styled-components";

const Btn = styled.div`
    margin-top: 200px !important;
    display: block;
    margin: 0 auto;
    width: 170px;
    height: 60px;
    padding: 6px 0 0 3px;
    border: 2px solid #2962ff;
    border-radius: 2px;
    background: none;
    font-size: 16px;
    line-height: 54px;
    color: #2962ff;
    letter-spacing: 0.25em;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    vertical-align: middle;
    text-align: center;
    appearance: none;
    transition: background 0.4s, color 0.4s;
    cursor: pointer;

    &:hover {
        background: #2962ff;
        color: white;
        transition: 0.5s;
    }
`;

export { Btn };

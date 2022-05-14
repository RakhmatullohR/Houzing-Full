import styled from 'styled-components';
import {ReactComponent as bed} from '../../../assets/icons/bed.svg';
import {ReactComponent as bath} from '../../../assets/icons/bath.svg';
import {ReactComponent as car} from '../../../assets/icons/car.svg';
import {ReactComponent as ruler} from '../../../assets/icons/ruler.svg';
import { Input, Select, Button } from 'antd';
import {ReactComponent as address} from '../../../assets/icons/address.svg';
import {ReactComponent as settings} from '../../../assets/icons/settings.svg';
import {ReactComponent as search} from '../../../assets/icons/search.svg';


const Container = styled.div`
`
const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    @media (max-width: 768px) {
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
        margin-top: 92px;
    }
    @media (max-width: 550px) {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;
        margin-top: 92px;
    }
`;

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin: 8px 0 32px 0;
    @media (max-width: 768px) {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        margin: 8px 0 24px 0;
    }
    @media (max-width: 550px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        margin: 8px 0 24px 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 12px;
    cursor: pointer;
    @media (max-width: 768px) {
        margin: 0 10px;
    }
`;

Box.Bed = styled(bed)`
    width: 20px;
    height: 20px;
`;

Box.Bath = styled(bath)`
    width: 20px;
    height: 20px;
`;

Box.Car = styled(car)`
    width: 20px;
    height: 20px;
`;

Box.Ruler = styled(ruler)`
    width: 20px;
    height: 20px;
`;

Box.Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-top: 6.7px;
    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 22px;
    }
    @media (max-width: 550px) {
        font-size: 13px;
        line-height: 20px;
    }
`

const Price = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 24px 0 50px 0;
    @media (max-width: 768px) {
        font-weight: 600;
        font-size: 25px;
        line-height: 32px;
        margin: 20px 0 35px 0;
    }
    @media (max-width: 550px) {
        font-weight: 600;
        font-size: 23px;
        line-height: 32px;
        margin: 20px 0 35px 0;
    }
`

const Form = styled.div`
    display: none;
    flex-direction: column;
    width: 90%;
    background: #FFFFFF;
    border-radius: 3px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px;
    @media (max-width: 768px) {
        display: flex;
    }
`

Form.Input = styled(Input)`
    border-bottom: 2px solid #E6E9EC;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #696969;
    margin-bottom: 10px;
`

Form.Select = styled(Select)`
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #696969;
    margin-bottom: 10px;
    outline: none;
    width: 100%;
`

Form.Address = styled(address)``

Form.Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`
Form.Advanced = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 44px;
    border: 1px solid #0061DF;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: ${({search}) => search ==='search' ? '#fff' : '#0061DF'};
    flex: 1;
    background-color: ${({search}) => search ==='search' ? '#0061DF' : 'transparent'};
`
Form.Settings = styled(settings)`
    width: 18px;
    height: 18px;
`

Form.Search = styled(search)`
    width: 18px;
    height: 18px;
`

Form.Search = styled(search)``


export { Container, Title, Subtitle, Wrapper, Box, Price, Form}
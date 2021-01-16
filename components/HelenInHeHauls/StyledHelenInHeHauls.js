import styled from 'styled-components'

const StyledHelenInHeHauls = styled.div`
  width: var(--helen-in-hehauls-width);
  height: var(--helen-in-hehauls-height);

  position: relative;
  display: flex;
  padding-top: calc(var(--helen-in-hehauls-width) * 0.05);
  flex-direction: column;
  align-items: center;

  .head {
    position: relative;
    width: var(--helen-in-hehauls-head-width);
    height: var(--helen-in-hehauls-head-height);
    background-color: var(--helen-in-hehauls-skin-color);
    border-radius: calc(var(--helen-in-hehauls-head-width) * 0.1);

    &:after {
      content: "";
      position: absolute;
      bottom: calc(var(--helen-in-hehauls-width) * -0.02);
      left: 50%;
      margin-left: calc(var(--helen-in-hehauls-width) * -0.04);
      width: calc(var(--helen-in-hehauls-width) * 0.08);
      height: calc(var(--helen-in-hehauls-width) * 0.02);
      background-color: var(--helen-in-hehauls-skin-color-darker);
    }

    .hair {
      position: absolute;
      top: -15%;
      left: -5%;
      width: 110%;
      height: 45%;
      background-color: var(--helens-hair-color);
      border-radius: calc((var(--helen-in-hehauls-width) * 0.2) * 0.15)
        calc((var(--helen-in-hehauls-width) * 0.2) * 0.15)
        calc((var(--helen-in-hehauls-width) * 0.2) * 0.05)
        calc((var(--helen-in-hehauls-width) * 0.2) * 0.05);

      &:before {
        position: absolute;
        left: calc(var(--helen-in-hehauls-head-width) * -0.25);
        top: calc(var(--helen-in-hehauls-head-width) * -0.0833333);
        content: '';
        width: 0;
        height: 0;
        border-top: calc(var(--helen-in-hehauls-head-width) * 0.133333) solid
          transparent;
        border-bottom: calc(var(--helen-in-hehauls-head-width) * 0.133333) solid
          transparent;
        transform: rotate(20deg);

        border-left: calc(var(--helen-in-hehauls-head-width) * 0.41666667) solid
          var(--helens-hair-color);
      }

      &:after {
        position: absolute;
        right: calc(var(--helen-in-hehauls-head-width) * -0.25);
        top: calc(var(--helen-in-hehauls-head-width) * -0.0833333);
        content: '';
        width: 0;
        height: 0;
        border-top: calc(var(--helen-in-hehauls-head-width) * 0.133333) solid
          transparent;
        border-bottom: calc(var(--helen-in-hehauls-head-width) * 0.133333) solid
          transparent;
        transform: rotate(-20deg);

        border-right: calc(var(--helen-in-hehauls-head-width) * 0.41666667)
          solid var(--helens-hair-color);
      }
    }

    .eyes {
      position: relative;
      top: calc(var(--helen-in-hehauls-width) * 0.05);

      &:before,
      &:after {
        display: grid;
        place-items: center;
        position: absolute;
        content: '●';
        width: calc(var(--helen-in-hehauls-head-width) * 0.183333);
        height: calc(var(--helen-in-hehauls-head-width) * 0.2);
        border-radius: 100%;
        background-color: #eee;
        color: var(--helens-eye-color);
        font-size: 10px;
      }

      &:before {
        left: calc(var(--helen-in-hehauls-width) * 0.05);
      }

      &:after {
        right: calc(var(--helen-in-hehauls-width) * 0.05);
      }
    }

    .nose {
      position: absolute;
      top: calc(var(--helen-in-hehauls-head-width) * 0.416667);
      left: calc(var(--helen-in-hehauls-head-width) * 0.403333);
      width: calc(var(--helen-in-hehauls-head-width) * 0.183333);
      height: calc(var(--helen-in-hehauls-head-width) * 0.2);
      border-radius: 100% 100% 65% 65%;
      background-color: var(--helen-in-hehauls-skin-color-darker);
      z-index: 3;
    }

    .mouth {
      position: absolute;
      top: calc(var(--helen-in-hehauls-head-width) * 0.66667);
      left: calc(var(--helen-in-hehauls-head-width) * 0.25);
      width: calc(var(--helen-in-hehauls-head-width) * 0.51667);
      height: calc(var(--helen-in-hehauls-head-width) * 0.16667);
      border-radius: calc(var(--helen-in-hehauls-head-width) * 0.06667)
        calc(var(--helen-in-hehauls-head-width) * 0.06667) 100% 100%;
      border-top: calc(var(--helen-in-hehauls-head-width) * 0.05) solid #8c1e1e;
      border-bottom: calc(var(--helen-in-hehauls-head-width) * 0.016667); solid #8c1e1e;
      background-color: #481818;
    }
  }

  .body {
    position: relative;
    width: 50%;
    height: calc(var(--helen-in-hehauls-width) * 0.46667);
    margin: calc(var(--helen-in-hehauls-width) * 0.02) auto 0 auto;
    background-color: var(--helen-in-hehauls-shirt-color);
    border-radius: 20% 20% 0 0;

    .right-arm,
    .left-arm {
      position: absolute;
      top: calc(var(--helen-in-hehauls-width) * 0.01);
      width: calc(var(--helen-in-hehauls-width) * 0.12);
      height: calc(var(--helen-in-hehauls-width) * 0.43333);
      border-radius: 20% 20% 10% 10%;
      background-color: var(--helen-in-hehauls-shirt-color);

      &:before {
        position: absolute;
        content: '';
        bottom: calc(var(--helen-in-hehauls-width) * -0.009);
        left: calc(var(--helen-in-hehauls-width) * 0.0266667);
        width: calc(var(--helen-in-hehauls-width) * 0.06);
        height: calc(var(--helen-in-hehauls-width) * 0.014);
        background-color: var(--helen-in-hehauls-skin-color-darker);
      }

      &:after {
        position: absolute;
        content: '';
        bottom: calc(var(--helen-in-hehauls-width) * -0.0544);
        left: calc(var(--helen-in-hehauls-width) * 0.012);
        width: calc(var(--helen-in-hehauls-width) * 0.083333);
        height: calc(var(--helen-in-hehauls-width) * 0.05);
        border-radius: 10% 10% 30% 30%;
        background-color: var(--helen-in-hehauls-skin-color-darker);
      }
    }
    .right-arm {
      right: calc(var(--helen-in-hehauls-width) * -0.085);
      transform: rotate(-30deg);
    }
    .left-arm {
      left: calc(var(--helen-in-hehauls-width) * -0.085);
      transform: rotate(30deg);
    }

    .right-strap,
    .left-strap {
      position: absolute;
      top: 0;
      width: calc(var(--helen-in-hehauls-width) * 0.046667);
      height: calc(var(--helen-in-hehauls-width) * 0.2);
      background-color: var(--helen-in-hehauls-hehauls-color);
    }
    .right-strap{
      left: calc(var(--helen-in-hehauls-width) * 0.37333);
    }
    .left-strap{
      left: calc(var(--helen-in-hehauls-width) * 0.08);
    }

    .flap {
      position: absolute;
      bottom: 0px;
      border-bottom: calc(var(--helen-in-hehauls-width) * 0.26667) solid var(--helen-in-hehauls-hehauls-color);
      border-left: calc(var(--helen-in-hehauls-width) * 0.083333) solid transparent;
      border-right: calc(var(--helen-in-hehauls-width) * 0.083333) solid transparent;
      height: 0;
      width: calc(var(--helen-in-hehauls-width) * 0.5);

      &:after {
        content: '';
        position: absolute;
        top: calc(var(--helen-in-hehauls-width) * 0.016667);
        left: calc(var(--helen-in-hehauls-width) * 0.1);
        width: calc(var(--helen-in-hehauls-width) * 0.13333);
        height: calc(var(--helen-in-hehauls-width) * 0.116667);
        border-radius: calc(var(--helen-in-hehauls-width) * 0.016667) calc(var(--helen-in-hehauls-width) * 0.016667) 100% 100%;
        background-color: #3937a2;
      }
    }
  }

  .legs {
    width: 50%;
    height: calc(var(--helen-in-hehauls-width) * 0.13333);
    position: relative;
    background-color: var(--helen-in-hehauls-hehauls-color);

    .left-leg {
      position: absolute;
      bottom: calc(var(--helen-in-hehauls-width) * -0.5);
      border-bottom: calc(var(--helen-in-hehauls-width) * 0.51667) solid var(--helen-in-hehauls-hehauls-color);
      border-left: calc(var(--helen-in-hehauls-width) * 0.05) solid transparent;
      border-right: calc(var(--helen-in-hehauls-width) * 0.06667) solid transparent;
      height: 0;
      width: calc(var(--helen-in-hehauls-width) * 0.25);
      transform: rotate(180deg);

      &:after {
        content: '';
        position: absolute;
        bottom: calc(var(--helen-in-hehauls-width) * -0.066667);
        width: calc(var(--helen-in-hehauls-width) * 0.15);
        height: calc(var(--helen-in-hehauls-width) * 0.066667);
        background-color: #ff0000;
        border-radius: 2% 2% 80% 80%;
      }
    }
    .right-leg {
      position: absolute;
      right: 0;
      bottom: calc(var(--helen-in-hehauls-width) * -0.5);
      border-bottom: calc(var(--helen-in-hehauls-width) * 0.51667) solid var(--helen-in-hehauls-hehauls-color);
      border-left: calc(var(--helen-in-hehauls-width) * 0.06667) solid transparent;
      border-right: calc(var(--helen-in-hehauls-width) * 0.05) solid transparent;
      height: 0;
      width: calc(var(--helen-in-hehauls-width) * 0.25);
      transform: rotate(180deg);

      &:after {
        content: '';
        right: 0;
        position: absolute;
        bottom: calc(var(--helen-in-hehauls-width) * -0.066667);
        width: calc(var(--helen-in-hehauls-width) * 0.15);
        height: calc(var(--helen-in-hehauls-width) * 0.066667);
        background-color: #ff0000;
        border-radius: 2% 2% 80% 80%;
      }
    }
  }
`

export default StyledHelenInHeHauls

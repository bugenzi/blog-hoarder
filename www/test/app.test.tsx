import * as React from "react";
import {shallow,configure} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../client/Component/app";
configure({ adapter: new Adapter() });
it("renders without crashing", () => {
    shallow(<App />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>App component test</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
// App.test.jsx

import { describe, it, expect, vitest } from "vitest";
import { render, screen, waitForElementToBeRemoved, } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import App from "./App";


window.fetch= vitest.fn(()=>{
  const user = {name: 'jack', email: 'jackmoreson@exmail.com'};
  return Promise.resolve({json: ()=>Promise.resolve(user)});
})
describe('testing App component',()=>{
  it('load test is shown while API request is in progress',async ()=>{
    render(<App/>);
    const loading =screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(()=>{
      screen.getByText('Loading...');
    })
  })
  it('users name is rendered',async()=>{
    render(<App/>);
    const userName= await screen.findByText('jack');
    expect(userName).toBeInTheDocument();
  });
  it('showes error messages', async ()=>{
    window.fetch.mockImplementationOnce(()=>{
      return Promise.reject({message: 'Error 404'})
    });
    render(<App/>)
    const errormsg = await screen.findByText('Error 404');
    expect(errormsg).toBeInTheDocument();
  });
})

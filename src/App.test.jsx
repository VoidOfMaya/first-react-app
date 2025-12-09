// App.test.jsx

import { describe, it, expect, vitest } from "vitest";
import { render, screen, waitForElementToBeRemoved, } from "@testing-library/react";

import UserEvent from "@testing-library/user-event";
import App from "./App";
import { Input } from "./assets/Components/input";

// working with asynchronous tests and basic mock testing

/*window.fetch= vitest.fn(()=>{
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
  */

// wokring with  simulating user events for testing

/*
describe('testing App component', ()=>{
  it('incremenates on increment button click',async ()=>{
    //const user = userEvent.
    render(<App/>);
    const counter= screen.getByTestId('counter');
    const incrementBtn = screen.getByText('Increment');

    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    expect(counter.textContent).toEqual('2');
  })
  it('decreminates on decremination button click',async ()=>{
    render(<App/>);
    const counter = screen.getByTestId('counter');
    const dencrementBtn = screen.getByText('Decrement');
    await userEvent.click(dencrementBtn);
    await userEvent.click(dencrementBtn);
    expect(counter.textContent).toEqual('-2');
    
  })
})
  */

//working with testing callbacks

describe('input value is updated correctly', () => {

  it('should update the value in the input field', async ()=>{
  
    render(<App />);
    const input = screen.getByRole('textbox');
     await UserEvent.type(input, "React");

    expect(input.value).toBe("React");
  })
  it('call the callback every time input value is changed', async ()=>{
    const handleChange = vitest.fn();

    render(<Input handleChange={handleChange} inputValue=""/>);

    const input = screen.getByRole('textbox');
    await UserEvent.type(input, 'React');
    expect(handleChange).toHaveBeenCalledTimes(5);
  })
  // this is how to abstrackt and mock a child component with the minimal requirments for the parent to function
  it('abstracts component',()=>{
    jest.mock('../assets/Components/card',()=>({photo, text})=>{
      <>
      <div data-test-id="photo">{photo.id}</div>
      <div data-test-id="text">{text}</div>
      </>
    })
  })
});
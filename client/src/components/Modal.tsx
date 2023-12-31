//Imports --------------

//React/Router Imports
import { useEffect, useRef, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

//Component -------------
const Modal = ( props: { children: ReactElement, isOpen: boolean, setIsOpen: Function, type: string }) => {

    //React Hooks -----------

    //Ref
    const elementRef = useRef<HTMLDivElement>(null);

    //Router
    const navigate = useNavigate();

    //useEffect
    useEffect(() => {
      //Creates function that calls for logic when click happens
      //outside of content element. (See line 44)
      const handleClick = (event: MouseEvent) => {
        handleClickOutside(event);
      };
  
      //Creates or removes event when component loads or unloads.
      if ( props.isOpen ) {
        document.addEventListener('mousedown', handleClick);
      } else {
        document.removeEventListener('mousedown', handleClick);
      }
      
      //Removes event listener when finished.
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [ props.isOpen ]);
    
    //Functions -------------

    //Handlers
    const handleClickOutside = (event: MouseEvent) => {
        //Checks to see if click occured outside of element.
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
          //If click occurred outside the element,
          
          //If this occurs with the Checkout Modal,
          //user is returned to home page.
          if (props.type === "Checkout") {
            navigate("/");
          }
          //Either way, modal is closed.
          props.setIsOpen(!props.isOpen);
        }
    };

    return (
        <div className={ props.isOpen ? "Modal" : "Modal displayNone"}>
            <div className='overlay'>
              <div className="content" ref={elementRef}>
                { props.children }
              </div>
            </div>
        </div>
    );
};

export default Modal;
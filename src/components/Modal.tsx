//React/Router Imports
import { useEffect, useRef, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

//Utility Imports
import { toTopOfPage } from '../utility/Functions';

//Component
const Modal = ( props: { children: ReactElement, isOpen: boolean, setIsOpen: Function, type: string }) => {

    //React Hooks -----------

    //useEffect
    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        handleClickOutside(event);
      };
  
      if ( props.isOpen ) {
        document.addEventListener('mousedown', handleClick);
      } else {
        document.removeEventListener('mousedown', handleClick);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [ props.isOpen ]);

    //Router
    const navigate = useNavigate();

    //Ref
    const elementRef = useRef<HTMLDivElement>(null);
    
    //Functions
    const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
          // Click occurred outside the element
          if (props.type === "Checkout") {
            toTopOfPage();
            navigate("/");
          }
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
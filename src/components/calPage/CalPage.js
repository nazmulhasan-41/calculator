import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './CalPage.css';


const CalPage = () => {
    let [button, setButton] = useState([]);
    let [str,setStr]=useState('');
    let [final,setFinal]=useState(0);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(i);
        }
        setButton(arr);

    }, [])
    let numberHandler = (number) => {
        // console.log('number clicked',number)
        setStr(str.concat(number))

    }


    function addbits(s) {
        var total = 0,
            s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
            
        while (s.length) {
          total += parseFloat(s.shift());
        }
        return total;
      }
      
      var string = '1+23+4+5-30';
      console.log(
        addbits(string)
      )

      const result=()=>{
        console.log(addbits(str))
        setFinal(addbits(str))
        
      }


    return (
        <div>

            <Container>
                <Row>
                    <Col ></Col>
                    <Col className='calBody'>

                        <FloatingLabel controlId="floatingTextarea" label={str} className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                        {final}

                        <Row>
                            <Col className='buttonCol'>
                                <div className='buttonArea'>

                                    {
                                        button.map(btn =>
                                            <>
                                                <Button  onClick={() => numberHandler(btn)} variant="secondary">{btn}</Button>
                                            </>
                                        )
                                    }

                                </div>

                            </Col>
                            <Col className='functionCol' >
                                <div className='functionArea'>

                                    <Button onClick={() => numberHandler('+')}  className='fnc' variant="secondary">+</Button>
                                    <Button onClick={()=> result()} className='fnc' variant="secondary">=</Button>

                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col ></Col>
                </Row>
            </Container>


        </div>
    );
};

export default CalPage;
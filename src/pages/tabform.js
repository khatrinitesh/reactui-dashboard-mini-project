import React from 'react';
import TitleBlock from '../components/titleblock';
import { Row,Col,Button,Form,Tab,Tabs } from 'react-bootstrap';

export default function TabForm() {
  return (
    <div className='inner_content'>
      <TitleBlock title="PDC1-CMC-30-SAMSUNG-FOSB"/>
      <div className="tabbed_block">
      <Tabs
        defaultActiveKey="tab1"
        id="uncontrolled-tab-example"
        className=""
        >
            {/* TAB 1 */}
        <Tab eventKey="tab1" title="Tab1">
            <div className='toolbar d-flex align-items-center justify-content-between'>
                <Form className="w-100">
                    <Row className="w-100 d-flex justify-content-end">
                        <Col lg={4} className='mb-3'>
                            <Form.Label>System Object ID</Form.Label>
                            <Form.Control type="text" placeholder="auto populate (Readonly)" disabled />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Comunication Center Locker<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="Default input" />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Usage Period</Form.Label>
                            <Form.Select>
                                <option>Dropdown</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>System Name</Form.Label>
                            <Form.Control type="text" placeholder="auto populate (Readonly)" disabled />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>AMAT Owner Manager</Form.Label>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>&nbsp;</Form.Label>
                            <Form.Select>
                                <option>Dropdown (if extension checked) (Editable)</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Arrival Date<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="12/04/2023" />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Department</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>AMAT Locker Sign Owner</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Customer</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Platform</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>FOSB Status</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Owner<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Platform Focal</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Location</Form.Label>
                            <Form.Select>
                                <option>Dropdown</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Owner Mobile</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Profile Type</Form.Label>
                            <Form.Control type="text" placeholder="" disabled />
                        </Col>
                        <Col lg={4} className="mb-3">
                            <Form.Label className="d-block">Lorem Ipsum</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Transition Mobile</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Creation By</Form.Label>
                            <Form.Control type="text" placeholder="" disabled />
                        </Col>
                        <Col lg={4} className="mb-3">
                            <Form.Label className="d-block">Attached</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Transition Owner Mobile</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Creation Date &amp; Time</Form.Label>
                            <Form.Control type="text" placeholder="Automatically Generated (Not editable)" disabled />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            &nbsp;
                        </Col>
                    </Row>
                </Form>
            </div>  
        </Tab>
        {/* TAB 2 */}
        <Tab eventKey="tab2" title="Tab2">
            <div className='toolbar d-flex align-items-center justify-content-between'>
                <Form className="w-100">
                    <Row className="w-100 d-flex justify-content-end">
                        <Col lg={4} className='mb-3'>
                            <Form.Label>System Object ID</Form.Label>
                            <Form.Control type="text" placeholder="auto populate (Readonly)" disabled />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Comunication Center Locker<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="Default input" />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Usage Period</Form.Label>
                            <Form.Select>
                                <option>Dropdown</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>System Name</Form.Label>
                            <Form.Control type="text" placeholder="auto populate (Readonly)" disabled />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>AMAT Owner Manager</Form.Label>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>&nbsp;</Form.Label>
                            <Form.Select>
                                <option>Dropdown (if extension checked) (Editable)</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Arrival Date<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="12/04/2023" />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Department</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>AMAT Locker Sign Owner</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Customer</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Platform</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Label>FOSB Status</Form.Label>
                            <Form.Select>
                                <option>Default Select</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Owner<sup>*</sup></Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Platform Focal</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4}>
                            <Form.Label>Location</Form.Label>
                            <Form.Select>
                                <option>Dropdown</option>
                            </Form.Select>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Owner Mobile</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Profile Type</Form.Label>
                            <Form.Control type="text" placeholder="" disabled />
                        </Col>
                        <Col lg={4} className="mb-3">
                            <Form.Label className="d-block">Lorem Ipsum</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Transition Mobile</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Creation By</Form.Label>
                            <Form.Control type="text" placeholder="" disabled />
                        </Col>
                        <Col lg={4} className="mb-3">
                            <Form.Label className="d-block">Attached</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>AMAT Transition Owner Mobile</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Form.Label>Creation Date &amp; Time</Form.Label>
                            <Form.Control type="text" placeholder="Automatically Generated (Not editable)" disabled />
                        </Col>
                        <Col lg={4} className='mb-3'>
                            &nbsp;
                        </Col>
                    </Row>
                </Form>
            </div> 
        </Tab>
        </Tabs>
    </div>
        
    </div>
  )
}

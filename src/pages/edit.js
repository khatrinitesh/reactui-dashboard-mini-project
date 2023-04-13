import React from 'react';
import TitleBlock from '../components/titleblock';
import { Row,Col,Button,Form } from 'react-bootstrap';

export default function Edit() {
  return (
    <div className='inner_content'>
      <TitleBlock title="Add/Edit FOSB"/>
        <div className='toolbar d-flex align-items-center justify-content-between'>
        <Form className="w-100">
            <Row className="w-100 d-flex justify-content-end">
                <Col lg={4} className='d-flex justify-content-end mb-3'>
                    <Button variant="outline-primary">PRINT BARCODE ID</Button>
                </Col>
                <Col lg={4} className="mb-3">
                    &nbsp;
                </Col>
                <Col lg={4} className="d-flex justify-content-end mb-3">
                    <Button variant="outline-primary">
                    &#43; EXTENSION</Button>
                </Col>
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
                    <Form.Control type="date" placeholder="12/04/2023 Auto generate (Editable)" />
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
                    <Form.Label className="d-block">&nbsp;</Form.Label>
                    <Button variant="outline-primary float-end">&#43;</Button>
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
                <Col lg={12} className="mt-3 mb-3 d-flex justify-content-end">
                    <div className='d_block'>
                        <Button variant='outline-primary' className="me-2">CANCEL</Button>
                        <Button variant='primary'>SAVE</Button>
                    </div>
                </Col>
            </Row>
        </Form>
        </div> 
    </div>
  )
}

import React, { useState } from 'react'
import TopMember from '../../../Template/TopMember'
import SidebarMember from '../../../Template/SidebarMember'
import FootMember from '../../../Template/FootMember'
import { Button, Card, Checkbox, Form, Input, Modal, Select } from 'antd'
import { showModalUndangan, handleOkUndangan, handleCancelUndangan, showModalWaBlast, handleOkWaBlast, handleCancelWaBlast, showModalCompany, handleOkCompany, handleCancelCompany } from './Shopping'
import { onFinishInvitation, onFinishFailedInvitation } from './Shopping'
import '../Shopping/Shopping.css'
import { Option } from 'antd/es/mentions'

const Shopping = () => {

    const [isModalOpenUndangan, setIsModalOpenUndangan] = useState(false);
    const [isModalOpenWaBlast, setIsModalOpenWaBlast] = useState(false);
    const [isModalOpenCompany, setIsModalOpenCompany] = useState(false);

    const items = ['a', 'b', 'c'];
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (selected) => {
        setSelectedItems(selected);
    };

    const handleSelectAll = () => {
        setSelectedItems([...items]);
    };

    const handleClearAll = () => {
        setSelectedItems([]);
    };

    return (
     <></>
    )
}

export default Shopping
import React from 'react';
import { Row, Col, Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.scss';

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '版本号',
        dataIndex: 'version',
    },
    {
        title: '环境',
        dataIndex: 'environment',
    },
    {
        title: '状态',
        dataIndex: 'status',
    },
];

const Versions = () => {
    return (
        <div>
            <div className={styles.title}>
                <Row justify="end">
                    <Button type="primary" icon={<PlusOutlined />}>
                        新建
                    </Button>
                </Row>
            </div>
            <Table columns={columns} dataSource={[]} />
        </div>
    );
};

export default Versions;

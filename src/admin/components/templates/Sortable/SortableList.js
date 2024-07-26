import React from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from 'react-sortable-hoc';
import SgWidgetItem from "@/admin/components/ui/WidgetItem";

const SortableList = (props) => {
    const {
        data,
        dataTypes,
        statusOptions,
        handleChange
    } = props

    return (
        <div className='widgets flex flex-column gap-[16px]'>
            {(data?.page_widgets || []).map((widget, index) => {
                return (
                    <SortableItem
                        key={`item-${index}`}
                        index={index}
                        value={index}
                        indexz={index}
                        widget={widget}
                        statusOptions={statusOptions}
                        dataTypesOptions={dataTypes}
                        handleChange={handleChange}
                    />
                )
            })}
        </div>
    );
}

export default SortableContainer(SortableList);
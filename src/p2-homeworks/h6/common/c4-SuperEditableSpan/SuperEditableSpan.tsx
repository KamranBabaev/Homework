import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState
} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import styles from '../../HW6.module.css';
import {themeReducer} from "../../../h12/bll/themeReducer";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
      autoFocus, // игнорировать изменение этого пропса
      onBlur,
      onEnter,
      spanProps,

      ...restProps
    }
) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

  const onEnterCallback = () => {
    setEditMode(false)
    onEnter && onEnter()
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false)
    onBlur && onBlur(e)
  }
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setEditMode(true)
    onDoubleClick && onDoubleClick(e)
  }


  return (
      <>
        {
          editMode
              ? <SuperInputText
                  autoFocus // пропсу с булевым значением не обязательно указывать true
                  onBlur={onBlurCallback}
                  onEnter={onEnterCallback}

                  {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
              />
              : <div style={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
                <span
                    onDoubleClick={onDoubleClickCallBack}
                    className={styles.spanBlock}
                    {...restSpanProps}
                >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                  {children || restProps.value}
                    </span>
                { !editMode && <span onClick={() => setEditMode(true)}>+</span>}
              </div>
        }
      </>
  )
}

export default SuperEditableSpan

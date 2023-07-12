import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../../components/Button/Button'

function IndexPage() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const [pn, setPn] = useState(0)
  const goPage = () => {
    setPn(pn + 1)
    navigate(`/?pn=${pn}`)
  }
  return <div>
    <Link to={'/suspense'}><Button>suspense</Button></Link>
    <Button onClick={goPage}>跳转参数</Button>
    <Button onClick={goBack}>返回</Button>
  </div>
}

export default IndexPage

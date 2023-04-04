/* eslint-disable prettier/prettier */
import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

      // const msgError = () => {
      //   return response
      //     .status(400)
      //     .json({ error: 'Please, check your e-mail and password!' })
      // }


    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Please, check your e-mail and password!' })
    }

    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      return response
        .status(400)
        .json({ error: 'Please, check your e-mail and password!' })
    }

    if (!(await user.checkPassword(password))) {
        return response
          .status(401)
          .json({ error: 'Please, check your e-mail and password!' })
      }


      return response.json({ id: user.id, name: user.name, email, admin: user.admin })
  }
}

export default new SessionController()

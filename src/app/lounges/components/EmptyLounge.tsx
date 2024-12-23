import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Vector3 } from 'three'
import LoungeModel from './LoungeModel'
import { useRouter } from 'next/navigation'
import { URL } from '@/static'
import styles from './EmptyLounge.module.css'

export default function EmptyLounge() {
  const router = useRouter()

  return (
    <div className={styles.deem}>
      라운지가 없습니다! <br /> 새 라운지를 만들어주세요!
      <Canvas
        style={{ width: '324px', height: '600px' }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <ambientLight intensity={1} />
        <group position={[0, 0, 0]}>
          <LoungeModel
            type='L0004'
            position={new Vector3(0, 0, 0)}
            label='새 라운지 만들기'
            scale={[2, 2, 2]}
            onClick={() => router.push(URL.newLounge)}
          />
        </group>
        <Text position={[0, -3, 0]} fontSize={0.7} color='#FFFFFF'>
          새 라운지 만들기
        </Text>
      </Canvas>
    </div>
  )
}

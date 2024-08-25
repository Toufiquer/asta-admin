/*
|-----------------------------------------
| setting up NewOrder for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: admin, August, 2024
|-----------------------------------------
*/
import { Slider } from '@/components/ui/slider'

const NewOrder = () => {
  const examPleCustomerCurerService = [
    {
      id: 1,
      name: 'Overall',
      successRate: 84,
      total: 6,
      success: 5,
      cancelled: 1,
    },
    {
      id: 2,
      name: 'Pathao',
      successRate: 100,
      total: 1,
      success: 1,
      cancelled: 0,
    },
    {
      id: 3,
      name: 'RedX',
      successRate: 50,
      total: 2,
      success: 1,
      cancelled: 1,
    },
    {
      id: 4,
      name: 'Steadfast',
      successRate: 100,
      total: 3,
      success: 3,
      cancelled: 0,
    },
  ]
  return (
    <main className="flex flex-col">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl font-semibold">New Order</h2>
        <div className="text-blue-500 hover:underline">
          How to Take New Order?
        </div>
      </div>
      <div className="w-full px-8 pt-8">
        <div className="w-full flex gap-2">
          {examPleCustomerCurerService.map((curr) => {
            const textColor =
              curr.successRate > 50 ? ' text-green-500 ' : ' text-rose-500 '
            const bgColor =
              curr.successRate > 50 ? ' bg-green-500 ' : ' bg-rose-500 '
            let widthProgress = 'w-full'
            const allWidth = [
              'w-[1%]',
              'w-[2%]',
              'w-[3%]',
              'w-[4%]',
              'w-[5%]',
              'w-[6%]',
              'w-[7%]',
              'w-[8%]',
              'w-[9%]',
              'w-[10%]',
              'w-[11%]',
              'w-[12%]',
              'w-[13%]',
              'w-[14%]',
              'w-[15%]',
              'w-[16%]',
              'w-[17%]',
              'w-[18%]',
              'w-[19%]',
              'w-[20%]',
              'w-[21%]',
              'w-[22%]',
              'w-[23%]',
              'w-[24%]',
              'w-[25%]',
              'w-[26%]',
              'w-[27%]',
              'w-[28%]',
              'w-[29%]',
              'w-[30%]',
              'w-[31%]',
              'w-[32%]',
              'w-[33%]',
              'w-[34%]',
              'w-[35%]',
              'w-[36%]',
              'w-[37%]',
              'w-[38%]',
              'w-[39%]',
              'w-[40%]',
              'w-[41%]',
              'w-[42%]',
              'w-[43%]',
              'w-[44%]',
              'w-[45%]',
              'w-[46%]',
              'w-[47%]',
              'w-[48%]',
              'w-[49%]',
              'w-[50%]',
              'w-[51%]',
              'w-[52%]',
              'w-[53%]',
              'w-[54%]',
              'w-[55%]',
              'w-[56%]',
              'w-[57%]',
              'w-[58%]',
              'w-[59%]',
              'w-[60%]',
              'w-[61%]',
              'w-[62%]',
              'w-[63%]',
              'w-[64%]',
              'w-[65%]',
              'w-[66%]',
              'w-[67%]',
              'w-[68%]',
              'w-[69%]',
              'w-[70%]',
              'w-[71%]',
              'w-[72%]',
              'w-[73%]',
              'w-[74%]',
              'w-[75%]',
              'w-[76%]',
              'w-[77%]',
              'w-[78%]',
              'w-[79%]',
              'w-[80%]',
              'w-[81%]',
              'w-[82%]',
              'w-[83%]',
              'w-[84%]',
              'w-[85%]',
              'w-[86%]',
              'w-[87%]',
              'w-[88%]',
              'w-[89%]',
              'w-[90%]',
              'w-[91%]',
              'w-[92%]',
              'w-[93%]',
              'w-[94%]',
              'w-[95%]',
              'w-[96%]',
              'w-[97%]',
              'w-[98%]',
              'w-[99%]',
              'w-[100%]',
            ]
            widthProgress = allWidth[curr.successRate - 1]
            return (
              <div key={curr.id} className="bg-gray-950 rounded-lg py-2">
                <div className="border-b p-2">
                  <h2 className="text-xl">{curr.name}</h2>
                </div>
                <div className="border-b p-2">
                  <h3 className={`${textColor} text-sm`}>
                    Success Rage: {curr.successRate}
                  </h3>
                  <h3>Total: {curr.total}</h3>
                  <h3>Success: {curr.success}</h3>
                  <h3>Cancelled: {curr.cancelled}</h3>
                </div>
                <div className="w-full px-1 pt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className={`${bgColor} h-1 rounded-full ${widthProgress}`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
          <h2>New Customer</h2>
        </div>
      </div>
    </main>
  )
}
export default NewOrder

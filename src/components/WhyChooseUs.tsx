import React from 'react'
import Heading from './common/Heading'

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50  py-12 px-4 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto">


    <Heading 
      label="Why Us?"
      title={"Why Choose Us?"} 
      description= {`At Unmatched Consultancy, we don’t just provide services — we become a part of your business journey.`} />

   

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

      {[
        {
          title: "Your Business, Our Responsibility",
          desc: "We think and act as stakeholders, ensuring complete ownership and accountability."
        },
        {
          title: "Expert Technical & Financial Knowledge",
          desc: "Strong expertise in business consulting, taxation, accounting, compliance, and payroll."
        },
        {
          title: "End-to-End Business Support",
          desc: "From company incorporation to ongoing compliance and financial management."
        },
        {
          title: "Customized Business Solutions",
          desc: "Tailor-made strategies aligned with your business goals and industry requirements."
        },
        {
          title: "Compliance-Driven Approach",
          desc: "Timely filings, accurate reporting, and adherence to statutory regulations."
        },
        {
          title: "Growth & Cost Optimization Focus",
          desc: "Helping businesses reduce costs, improve efficiency, and grow sustainably."
        }
      ].map((item, index) => (
<div
  key={index}
  className="
    group relative rounded-2xl border border-primary-800/10
    bg-white p-6
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl
  "
>
  {/* Soft hover glow */}
  <div
    className="
      pointer-events-none absolute inset-0 rounded-2xl
      bg-gradient-to-br from-secondary-500/10 to-transparent
      opacity-0 transition-opacity duration-300
      group-hover:opacity-100
    "
  />

  {/* Number badge */}
  <div
    className="
      relative z-10 mb-4 flex h-12 w-12 items-center justify-center
      rounded-full
      bg-secondary-500/10 text-secondary-600
      font-semibold text-base
    "
  >
    {index + 1}
  </div>

  {/* Title */}
  <h3 className="relative z-10 mb-2 text-lg font-semibold text-primary-900">
    {item.title}
  </h3>

  {/* Description */}
  <p className="relative z-10 text-sm leading-relaxed text-primary-800/70">
    {item.desc}
  </p>
</div>
      ))}

    </div>
  </div>
</section>
  )
}

export default WhyChooseUs

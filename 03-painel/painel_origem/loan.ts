              },
              unit_amount: stripeAmountCents,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${origin}/seguro?proposalId=${input.proposalId}&payment=success`,
        cancel_url: `${origin}/seguro?proposalId=${input.proposalId}&payment=cancelled`,
        customer_email: proposal.email || undefined,
        client_reference_id: input.proposalId.toString(),
        metadata: {
          proposal_id: input.proposalId.toString(),
          payment_type: "insurance",
          customer_name: proposal.fullName || "",
          customer_email: proposal.email || "",
        },
        allow_promotion_codes: true,
      });

      // Save Stripe session ID to insurance record
      await updateInsurancePayment(insurance.id, {
        stripeSessionId: session.id,
        optIn: 1,
      });

      return { checkoutUrl: session.url, sessionId: session.id };
    }),

  /**
   * Calculate insurance amount for a given loan amount
   */
  calculateInsurance: publicProcedure
    .input(z.object({ loanAmount: z.number().min(300).max(10000) }))
    .query(async ({ input }) => {
      const pixConfig = await getPixSettings();
      const dynamicAmount = calculateInsuranceAmount(input.loanAmount, pixConfig.insurancePercentage);
      return {
        amount: dynamicAmount,
        percentage: pixConfig.insurancePercentage,
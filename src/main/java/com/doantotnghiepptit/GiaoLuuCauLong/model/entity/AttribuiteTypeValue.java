package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "attribuite_type_value")
public class AttribuiteTypeValue {
    @Id
    private Long id;
    private String value;

    @ManyToOne
    @JoinColumn(name = "attribuite_type_id")
    private AttribuiteType attribuiteType;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
}
